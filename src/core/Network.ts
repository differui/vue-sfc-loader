import { injectable } from 'inversify';

@injectable()
class Network {
  public request(url: string): Promise<string> {
    return fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.text();
        }
        return '';
      })
      .catch(err => {
        console.error(`[vue-sfc-loader] can not fetch: ${url}`);
        throw err;
      });
  }
}

export default Network;