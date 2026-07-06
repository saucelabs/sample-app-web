import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./iframe-BJjOLL4L.js";import{t as i}from"./prop-types-CAcijpg_.js";var a=e((()=>{})),o,s,c,l=e((()=>{n(),o=t(i()),a(),s=r(),c=({activeOption:e,onChange:t,options:n,testId:r=void 0})=>(0,s.jsxs)(`span`,{className:`select_container`,children:[(0,s.jsx)(`span`,{className:`active_option`,"data-test":`active-option`,children:n[n.findIndex(t=>t.key===e)].value}),(0,s.jsx)(`select`,{onChange:t,className:`product_sort_container`,value:e,...r?{"data-test":r}:{},children:n.map(({key:e,value:t})=>(0,s.jsx)(`option`,{value:e,children:t},e))})]}),c.propTypes={activeOption:o.default.string.isRequired,onChange:o.default.func.isRequired,options:o.default.arrayOf(o.default.shape({key:o.default.string.isRequired,value:o.default.string.isRequired})).isRequired,testId:o.default.string},c.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{testId:{defaultValue:{value:`undefined`,computed:!0},description:`The test id`,type:{name:`string`},required:!1},activeOption:{description:`The active option key`,type:{name:`string`},required:!0},onChange:{description:`The on change handler`,type:{name:`func`},required:!0},options:{description:`The options`,type:{name:`arrayOf`,value:{name:`shape`,value:{key:{name:`string`,required:!0},value:{name:`string`,required:!0}}}},required:!0}}}})),u,d,f,p,m,h;e((()=>{u=t(n()),l(),d=r(),f={title:`SwagLabs/Form/Select`,component:c,parameters:{backgrounds:{default:`grey`,values:[{name:`grey`,value:`#474c55`}]}}},p=()=>{let[e,t]=(0,u.useState)(`az`),n=[{key:`az`,value:`Name (A to Z)`},{key:`za`,value:`Name (Z to A)`},{key:`lohi`,value:`Price (low to high)`},{key:`hilo`,value:`Price (high to low)`}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{activeOption:e,options:n,onChange:e=>{t(e.target.value)},testId:`product_sort_container`}),(0,d.jsxs)(`p`,{style:{color:`#ffffff`},children:[`You selected`,` `,(0,d.jsx)(`strong`,{children:n[n.findIndex(t=>t.key===e)].value}),`.`]})]})},m=p.bind({}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [activeOption, setActiveOption] = useState("az");
  const options = [{
    key: "az",
    value: "Name (A to Z)"
  }, {
    key: "za",
    value: "Name (Z to A)"
  }, {
    key: "lohi",
    value: "Price (low to high)"
  }, {
    key: "hilo",
    value: "Price (high to low)"
  }];
  const sortByOption = event => {
    setActiveOption(event.target.value);
  };
  return <>
      <Select activeOption={activeOption} options={options} onChange={sortByOption} testId="product_sort_container" />
      <p style={{
      color: "#ffffff"
    }}>
        You selected{" "}
        <strong>
          {options[options.findIndex(option => option.key === activeOption)].value}
        </strong>
        .
      </p>
    </>;
}`,...m.parameters?.docs?.source}}},h=[`DefaultSelect`]}))();export{m as DefaultSelect,h as __namedExportsOrder,f as default};