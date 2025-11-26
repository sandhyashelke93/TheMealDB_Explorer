const cache={};

export function setCache(key,data,ttl=300){
  cache[key]={data,expires:Date.now()+ttl*1000};
}

export function getCache(key){
  const c=cache[key];
  if(!c) return null;
  if(Date.now()>c.expires){ delete cache[key]; return null; }
  return c.data;
}
