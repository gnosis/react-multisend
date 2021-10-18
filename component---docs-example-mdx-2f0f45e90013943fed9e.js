(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zDoZ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return h})),t.d(n,"default",(function(){return f}));var a=t("Fcif"),o=t("+I+c"),c=t("mXGw"),i=t("/FXl"),r=t("TjRS"),s=t("ZFoC"),l=t("bGYK"),b=t("bzer"),p=t("Cg8y"),d=t("sNn3"),m=(t("aD51"),["components"]),h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/example.mdx"}});var u={_frontmatter:h},O=r.a;function f(e){var n,t=e.components,f=Object(o.a)(e,m);return Object(i.b)(O,Object(a.a)({},u,f,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"example"},"Example"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can find the full code of the components in the example below at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/gnosis/react-multisend/tree/main/docs/example"},"docs/example"),".")),Object(i.b)(s.c,{__position:0,__code:'() => {\n  const [batch, setBatch] = React.useState([\n    createTransaction(TransactionType.transferFunds, nanoid()),\n  ])\n  return (\n    <ProvideMultiSendContext\n      safeAddress="0x1076f084A3703E1701a1a97F837906e56370D4f9"\n      network="4"\n    >\n      <TransactionBatch\n        value={batch}\n        onChange={setBatch}\n        classNames={classNames}\n      />\n    </ProvideMultiSendContext>\n  )\n}',__scope:(n={props:f,DefaultLayout:r.a,Playground:s.c,Props:s.d,nanoid:l.a,ProvideMultiSendContext:b.a,createTransaction:b.c,TransactionType:b.b,TransactionBatch:p.a,classNames:d},n.DefaultLayout=r.a,n._frontmatter=h,n),mdxType:"Playground"},(function(){var e=c.useState([Object(b.c)(b.b.transferFunds,Object(l.a)())]),n=e[0],t=e[1];return Object(i.b)(b.a,{safeAddress:"0x1076f084A3703E1701a1a97F837906e56370D4f9",network:"4",mdxType:"ProvideMultiSendContext"},Object(i.b)(p.a,{value:n,onChange:t,classNames:d,mdxType:"TransactionBatch"}))})),Object(i.b)("p",null,"This example uses ",Object(i.b)("a",{parentName:"p",href:"https://dndkit.com"},"dnd-kit")," for drag&drop transaction reordering.\nThe component styles can be customized using css modules. The example theme can be found at ","[docs/example/plain.module.css]","."),Object(i.b)("p",null,"To try the example with your own Safe, simply change the ",Object(i.b)("inlineCode",{parentName:"p"},"safeAddress")," and ",Object(i.b)("inlineCode",{parentName:"p"},"network")," props in the playground code."),Object(i.b)("p",null,"For understanding the different moving parts, in the following sections we're going to break the example down into it's individual components, going top-down."),Object(i.b)("h2",{id:"transactionbatch-component"},Object(i.b)("inlineCode",{parentName:"h2"},"<TransactionBatch>")," component"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Code:")," ","[docs/example/TransactionBatch.tsx]"),Object(i.b)("p",null,"Renders the list of ",Object(i.b)("inlineCode",{parentName:"p"},"<Transaction>")," elements, handles adding, removing, and updating transactions.\nAlso implementes the reordering of list items using the ",Object(i.b)("a",{parentName:"p",href:"https://docs.dndkit.com/presets/sortable"},"Sortable preset of dnd-kit"),"."),Object(i.b)("h2",{id:"transaction-component"},Object(i.b)("inlineCode",{parentName:"h2"},"<Transaction>")," component"),Object(i.b)("p",null,"Represents a single transaction item in the batch.\nEach item has a fixed header, with a drag handle element, a title, and a remove button.\nClicking the title allows collapsing the transaction."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<TransactionTypeSelect>")," element allows switching between the ",Object(i.b)("a",{parentName:"p",href:"/react-multisend/encode#transactionTypes"},"different transaction types"),".\nWhen switching the transaction type, under the hood it will replace the entire transaction item with a fresh one created using ",Object(i.b)("a",{parentName:"p",href:"/react-multisend/api#createTransaction"},Object(i.b)("inlineCode",{parentName:"a"},"createTransaction")),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<TransactionBody>")," component's sole responsibiity is rendering the right specific component for the respective transaction type: ",Object(i.b)("inlineCode",{parentName:"p"},"<TransferFunds>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<TransferCollectible>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<CallContract>"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"<RawTransaction>"),"."),Object(i.b)("h2",{id:"transferfunds-assetselect-and-amountinput-components"},Object(i.b)("inlineCode",{parentName:"h2"},"<TransferFunds>"),", ",Object(i.b)("inlineCode",{parentName:"h2"},"<AssetSelect>")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"<AmountInput>")," components"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"transfercollectible-and-collectibleselect-components"},Object(i.b)("inlineCode",{parentName:"h2"},"<TransferCollectible>")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"<CollectibleSelect>")," components"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"callcontract-component"},Object(i.b)("inlineCode",{parentName:"h2"},"<CallContract>")," component"),Object(i.b)("p",null,"TODO"))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/example.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-example-mdx-2f0f45e90013943fed9e.js.map