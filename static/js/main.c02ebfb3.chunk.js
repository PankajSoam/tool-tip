(this["webpackJsonpmy-tooltip"]=this["webpackJsonpmy-tooltip"]||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o.n(n),i=o(8),c=o.n(i),r=(o(13),o(7),o(2)),a=o(3),l=o(5),u=o(4),h=o(0),j=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).mouseHoverTrue=function(){n.setState({hover:!0})},n.mouseHoverfalse=function(){n.setState({hover:!1})},n.state={hover:!1},n}return Object(a.a)(o,[{key:"render",value:function(){var e="tool-tip ".concat(this.props.position);return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h1",{className:"hover-on-element",onMouseEnter:this.mouseHoverTrue,onMouseLeave:this.mouseHoverfalse,children:"Press"}),this.state.hover&&Object(h.jsx)("div",{className:e,children:"Tool tip text"})]})}}]),o}(n.Component),p=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).handleChange=function(e){n.setState({position:e.target.value}),console.log(n.state.position)},n.state={position:"bottom"},n}return Object(a.a)(o,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("select",{className:"dropdown",onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"bottom",children:"Bottom"}),Object(h.jsx)("option",{value:"top",children:"Top"}),Object(h.jsx)("option",{value:"right",children:"Right"}),Object(h.jsx)("option",{value:"left",children:"Left"})]}),Object(h.jsx)(j,{position:this.state.position})]})}}]),o}(n.Component);var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{})})};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,o){}},[[15,1,2]]]);
//# sourceMappingURL=main.c02ebfb3.chunk.js.map