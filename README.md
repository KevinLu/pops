# Points of Presence for CDNs


[![npm](https://img.shields.io/npm/v/@adaptivelink/pops.svg)](https://www.npmjs.com/package/@adaptivelink/pops) &nbsp; ![Test](https://github.com/adaptive/pops/workflows/Test/badge.svg?branch=main)

ES Module with geolocation and IATA codes of Content Delivery Networks and hosting companies  points of presence. Useful for plotting, planning and network measurements.

### Install with `yarn` or `npm`

```bash
yarn add @adaptivelink/pops
```

```bash
npm i @adaptivelink/pops
```

### Usage

```javascript
import PoPs from "@adaptivelink/pops";

/* Geolocation of Cloudflare PoPs */
console.log(PoPs.cloudflare.geo);

/* IATA code of Fastly PoPs */
console.log(PoPs.fastly.code);

/* Total of locations for AWS Lightsail Datacenters */
console.log(PoPs.fastly.code.length);

/* Providers */
["adaptive", "alibaba", "arubacloud", "atlanticnet", "azurecdn",
"bunnycdn", "cloudflare", "cloudfront", "cloudsigma", "digitalocean",
"fastly", "googlecdn", "heroku", "hetzner", "hostwinds","imperva",
"ionos", "kamatera", "keycdn", "leapswitch", "lightsail", "linode",
"mnx", "netlify", "ovh","scaleaway", "stackpath", "upcloud", "vercel",
"vultr"];
```

### Supported CDNs and Hosting Providers

*   Alibaba ```alibaba```
*   Arubacloud ```arubacloud```
*   AWS Cloudfront ```cloudfront```
*   AWS Lightsail ```lightsail```
*   Atlanticnet ```atlanticnet```
*   Azurecdn ```azurecdn```
*   Bunnycdn ```bunnycdn```
*   Cloudflare ```cloudflare```
*   CloudSigma ```cloudsigma```
*   DigitalOcean ```digitalocean```
*   Fastly ```fastly```
*   GoogleCDN ```googlecdn```
*   Heroku ```heroku```
*   Hetzner ```hetzner```
*   Hostwinds ```hostwinds```
*   Imperva ```imperva```
*   Ionos ```ionos```
*   Kamatera ```kamatera```
*   KeyCDN ```keycdn```
*   LeapSwitch ```leapswitch```
*   Linode ```linode```
*   MNX ```mnx```
*   Netlify ```netlify```
*   OVH ```ovh```
*   Scaleaway ```scaleaway```
*   Stackpath ```stackpath```
*   Upcloud ```upcloud```
*   Vercel ```vercel```
*   Vultr ```vultr```

### Contribution

Feel free to suggest or PR more networks and PoPs locations.