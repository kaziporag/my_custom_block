(()=>{"use strict";const t=window.wp.blocks,e=window.wp.blockEditor,o=window.ReactJSXRuntime;(0,t.registerBlockType)("my-plugin/my-block",{title:"My Custom Block",icon:"smiley",category:"text",attributes:{content:{type:"string",source:"html",selector:"p"}},edit:({attributes:t,setAttributes:s})=>{const n=(0,e.useBlockProps)();return(0,o.jsx)(e.RichText,{...n,tagName:"p",onChange:t=>s({content:t}),value:t.content,placeholder:"Write something..."})},save:({attributes:t})=>{const s=e.useBlockProps.save();return(0,o.jsx)(e.RichText.Content,{...s,tagName:"p",value:t.content})}})})();