/**
 * skylark-data-streams - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./Stream"],function(t,n,s,e){return e.inherit({klassName:"ChunkedStream",numChunks:0,numChunksLoaded:0,init:function(t){for(var n=t.length,s=new Uint8Array(n),e=0;e<n;++e)s[e]=t.charCodeAt(e);DecodeStream.prototype.init.call(s),this.dict=stream.dict},numChunks:function(){},getMissingChunks:function(){for(var t=[],n=0,s=this.numChunks;n<s;++n)n in this.loadedChunks||t.push(n);return t},getBaseStreams:function(){return[this]},allChunksLoaded:function(){var t=this._;return t.numChunksLoaded===t.numChunks},onReceiveData:function(t,n){var s=t+n.byteLength;assert(t%this.chunkSize==0,"Bad begin offset: "+t);var e=this.bytes.length;assert(s%this.chunkSize==0||s===e,"Bad end offset: "+s),this.bytes.set(new Uint8Array(n),t);var i=this.chunkSize,h=Math.floor(t/i),r=Math.floor((s-1)/i)+1;for(n=h;n<r;++n)n in this.loadedChunks||(this.loadedChunks[n]=!0,++this.numChunksLoaded)},onReceiveInitialData:function(t){this.bytes.set(t),this.initialDataLength=t.length;for(var n=this.end===t.length?this.numChunks:Math.floor(t.length/this.chunkSize),s=0;s<n;s++)this.loadedChunks[s]=!0,++this.numChunksLoaded},ensureRange:function(t,n){if(!(t>=n||n<=this.initialDataLength))for(var s=this.chunkSize,e=Math.floor(t/s),i=Math.floor((n-1)/s)+1,h=e;h<i;++h)if(!(h in this.loadedChunks))throw new MissingDataException(t,n)},nextEmptyChunk:function(t){for(var n=t,s=this.numChunks;n<s;++n)if(!(n in this.loadedChunks))return n;for(n=0;n<t;++n)if(!(n in this.loadedChunks))return n;return null},hasChunk:function(t){return t in this._.loadedChunks},getByte:function(){var t=this.pos;return t>=this.end?-1:(this.ensureRange(t,t+1),this.bytes[this.pos++])},getBytes:function(t){var n=this.bytes,s=this.pos,e=this.end;if(!t)return this.ensureRange(s,e),n.subarray(s,e);var i=s+t;return i>e&&(i=e),this.ensureRange(s,i),this.pos=i,n.subarray(s,i)},peekBytes:function(t){var n=this.getBytes(t);return this.pos-=n.length,n},getByteRange:function(t,n){return this.ensureRange(t,n),this.bytes.subarray(t,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(t,n,s){function e(){}e.prototype=Object.create(this),e.prototype.getMissingChunks=function(){for(var t=this.chunkSize,n=Math.floor(this.start/t),s=Math.floor((this.end-1)/t)+1,e=[],i=n;i<s;++i)i in this.loadedChunks||e.push(i);return e};var i=new e;return i.pos=i.start=t,i.end=t+n||this.end,i.dict=s,i}})});
//# sourceMappingURL=sourcemaps/ChunkedStream.js.map
