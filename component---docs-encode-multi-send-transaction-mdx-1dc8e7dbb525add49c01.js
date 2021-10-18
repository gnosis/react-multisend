(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{XO3D:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t("Fcif"),i=t("+I+c"),c=(t("mXGw"),t("/FXl")),o=t("TjRS"),r=(t("aD51"),["components"]),s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/encode-multi-send-transaction.mdx"}});var l={_frontmatter:s},b=o.a;function p(e){var n=e.components,t=Object(i.a)(e,r);return Object(c.b)(b,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("a",{name:"transactionTypes"}),"The library support defining transactions of four different kinds:",Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"TransactionType.transferFunds"),": Transfer an amount of ETH or any ERC20 token"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"TransactionType.transferCollectible"),": Transfer a non-fungible token (NFT)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"TransactionType.callContract"),": Call a verified contract by selecting a function and providing input values"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"TransactionType.raw"),": Any other transaction can be defined by provided the raw encoded data")),Object(c.b)("p",null,"Each of these types comes with its own JSON structure for representing transactions.\nYou can find the corresponding interfaces at: ","[src/types.ts]","\nYou may use the ",Object(c.b)("a",{parentName:"p",href:"/react-multisend/api/createTransaction"},Object(c.b)("inlineCode",{parentName:"a"},"createTransaction"))," function as a convenient way for creating a new, empty transaction of a certain type."),Object(c.b)("p",null,"The first step of encoding a list of transactions into an executable format is provided by the ",Object(c.b)("a",{parentName:"p",href:"/react-multisend/api/encodeSingle"},Object(c.b)("inlineCode",{parentName:"a"},"encodeSingle"))," function.\nIt turns a ",Object(c.b)("inlineCode",{parentName:"p"},"TransactionInput")," object into a ",Object(c.b)("inlineCode",{parentName:"p"},"MetaTransaction"),", i.e., a representation with an ABI encoded ",Object(c.b)("inlineCode",{parentName:"p"},"data")," field."),Object(c.b)("p",null,"The second step takes an array of ",Object(c.b)("inlineCode",{parentName:"p"},"MetaTransaction")," objects, and encodes it into a single ",Object(c.b)("inlineCode",{parentName:"p"},"MetaTransaction")," object describing the call to the ",Object(c.b)("inlineCode",{parentName:"p"},"MultiSend")," contract where the individual transactions are packed encoded into ",Object(c.b)("inlineCode",{parentName:"p"},"data"),".\nThis is implemented in the ",Object(c.b)("a",{parentName:"p",href:"/react-multisend/api/encodeMulti"},Object(c.b)("inlineCode",{parentName:"a"},"encodeMulti"))," function."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import { isValid, encodeSingle, encodeMulti } from 'react-multisend'\n\nif (transactionInputs.every(isValid)) {\n  const multiSendTransaction = encodeMulti(transactionInputs.map(encodeSingle))\n}\n")),Object(c.b)("p",null,"There are various options for executing a multi-send transaction encoded this way:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"from any enabled Safe/Zodiac module via ",Object(c.b)("inlineCode",{parentName:"li"},"executeTransactionFromModule")," (see: ",Object(c.b)("a",{parentName:"li",href:"https://github.com/gnosis/zodiac/blob/master/contracts/core/Module.sol#L43"},"Zodiac Module base contract"),")"),Object(c.b)("li",{parentName:"ul"},"directly by calling the Safe's ",Object(c.b)("inlineCode",{parentName:"li"},"execTransaction")," function, providing the required owner signatures (",Object(c.b)("a",{parentName:"li",href:"https://docs.gnosis.io/safe/docs/contracts_tx_execution/"},"learn more"),")"),Object(c.b)("li",{parentName:"ul"},"collecting the required signatures on-chain, by calling ",Object(c.b)("inlineCode",{parentName:"li"},"approveHash")," upfront (",Object(c.b)("a",{parentName:"li",href:"https://docs.gnosis.io/safe/docs/contracts_tx_execution/#on-chain-approvals"},"learn more"),")"),Object(c.b)("li",{parentName:"ul"},"collecting the required signatures off-chain, by proposing the transaction using the ",Object(c.b)("a",{parentName:"li",href:"https://docs.gnosis.io/safe/docs/tutorial_tx_service_initiate_sign/"},"Safe Transaction Service"))),Object(c.b)("p",null,"Check out the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/gnosis/safe-core-sdk/tree/main/packages/safe-core-sdk"},"@gnosis.pm/safe-core-sdk")," package for interacting with the Gnosis Safe contracts and the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/gnosis/safe-core-sdk/tree/main/packages/safe-service-client"},"@gnosis.pm/safe-service-client")," package for using the Safe Transaction Service from JavaScript apps."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/encode-multi-send-transaction.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-encode-multi-send-transaction-mdx-1dc8e7dbb525add49c01.js.map