import iata from "./iata-filtered.js";
import adaptive from "./providers/adaptive.js";
import alibaba from "./providers/alibaba.js";
import arubacloud from "./providers/arubacloud.js";
import atlanticnet from "./providers/atlanticnet.js";
import azurecdn from "./providers/azurecdn.js";
import bunnycdn from "./providers/bunnycdn.js";
import cloudflare from "./providers/cloudflare.js";
import cloudfront from "./providers/cloudfront.js";
import digitalocean from "./providers/digitalocean.js";
import fastly from "./providers/fastly.js";
import googlecdn from "./providers/googlecdn.js";
import hetzner from "./providers/hetzner.js";
import imperva from "./providers/imperva.js";
import ionos from "./providers/ionos.js";
import keycdn from "./providers/keycdn.js";
import leapswitch from "./providers/leapswitch.js";
import lightsail from "./providers/lightsail.js";
import linode from "./providers/linode.js";
import mnx from "./providers/mnx.js";
import ovh from "./providers/ovh.js";
import scaleaway from "./providers/scaleaway.js";
import stackpath from "./providers/stackpath.js";
import upcloud from "./providers/upcloud.js";
import vultr from "./providers/vultr.js";

const providers = {
  adaptive,
  alibaba,
  arubacloud,
  atlanticnet,
  azurecdn,
  bunnycdn,
  cloudflare,
  cloudfront,
  digitalocean,
  fastly,
  googlecdn,
  hetzner,
  imperva,
  ionos,
  keycdn,
  leapswitch,
  lightsail,
  linode,
  mnx,
  ovh,
  scaleaway,
  stackpath,
  upcloud,
  vultr
};

const popsData = {
  iata,
  providers
};

export default popsData;