import axios from 'axios';
import pkg from '../package.json';

const createXHRClient = (config = {}) => {
    const { insecure, host, token, version, workspace } = config;
    const protocol = !!insecure ? 'http' : 'https';

    axios.create({
        baseURL: `${protocol}://${host}/api/v${version}/workspace/${workspace}`,
    });

    defaults.headers.common = {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Authorization: token,
        'X-21PeakLess-Agent': `@21peakless/sdk#${pkg.version}`,
    };
};

export default createXHRClient;
