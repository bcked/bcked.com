var f=Object.defineProperty;var m=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var c=(t,i,r)=>i in t?f(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,a=(t,i)=>{for(var r in i||(i={}))u.call(i,r)&&c(t,r,i[r]);if(m)for(var r of m(i))l.call(i,r)&&c(t,r,i[r]);return t};function F(t,i=2,r="USD",n="symbol",e=!0){const s={minimumFractionDigits:i,maximumFractionDigits:i,style:"currency",currency:r,currencyDisplay:n,useGrouping:e};let o="standard";return t>=1e3?o="compact":t<1&&t>0&&(o="scientific"),Intl.NumberFormat("en-US",a({notation:o},s)).format(t)}function N(t,i=2,r=!0){const n={minimumFractionDigits:i,maximumFractionDigits:i,useGrouping:r};let e="standard";return t>=1e3?e="compact":t<.1&&t>0&&(e="scientific"),Intl.NumberFormat("en-US",a({notation:e},n)).format(t)}function D(t,i=0){return Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:i,maximumFractionDigits:i}).format(t)}function g(t,i,r=!0){let n;return t!==""&&i!==""&&!isNaN(t)&&!isNaN(i)?n=t-i:n=String(i).localeCompare(String(t)),n*(r?-1:1)}export{N as a,D as b,g as c,F as f};
