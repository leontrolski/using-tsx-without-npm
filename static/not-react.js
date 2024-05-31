export const React = {
    createElement: (tag, attrs, ...children)=>{
        const el = document.createElement(tag);
        attrs = attrs || {};
        const classes = (attrs.class || "").split(" ");
        delete attrs.class;
        for (const cls of classes){
            if (cls.length) el.classList.add(cls);
        }
        for (const [k, v] of Object.entries(attrs)){
            if (v === null || v === undefined) null;
            else if (v === true) el.setAttribute(k, "");
            else if (v === false) el.removeAttribute(k);
            else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
            else el.setAttribute(k, v);
        }
        for (let child of children.flat()){
            if (child === null) continue;
            if (typeof child === "string" || typeof child === "number") child = document.createTextNode(`${child}`);
            el.appendChild(child);
        }
        return el;
    }
};
