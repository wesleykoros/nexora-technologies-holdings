import type {MetadataRoute} from "next";
const base=process.env.NEXT_PUBLIC_SITE_URL||"https://nexoratechholdings.com";
const routes=["","/about","/platforms","/platforms/careaxis","/platforms/nexora-ai","/platforms/compliance-intelligence","/platforms/future-ventures","/industries","/partnerships","/technology","/insights","/contact","/privacy","/terms"];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(url=>({url:`${base}${url}`,lastModified:new Date(),changeFrequency:url===""?"weekly":"monthly",priority:url===""?1:.7}))}
