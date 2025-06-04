import { RouterLink } from 'vue-router';
export default (await import('vue')).defineComponent({
    name: 'HeaderNav',
    data() {
        return {
            menuOpen: false,
        };
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-button']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['header-wave']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "header-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = true;
        } },
    ...{ class: "menu-button" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "logo" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "logo" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "nav-links desktop-only" },
});
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    to: "/",
    ...{ class: "nav-link" },
}));
const __VLS_6 = __VLS_5({
    to: "/",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    to: "/about",
    ...{ class: "nav-link" },
}));
const __VLS_10 = __VLS_9({
    to: "/about",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
const __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    to: "/services",
    ...{ class: "nav-link" },
}));
const __VLS_14 = __VLS_13({
    to: "/services",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
const __VLS_16 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    to: "/contact",
    ...{ class: "nav-link" },
}));
const __VLS_18 = __VLS_17({
    to: "/contact",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mobile-menu" },
    ...{ class: ({ open: __VLS_ctx.menuOpen }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = false;
        } },
    ...{ class: "close-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "mobile-nav" },
});
const __VLS_20 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ 'onClick': {} },
    to: "/about",
    ...{ class: "nav-link" },
}));
const __VLS_22 = __VLS_21({
    ...{ 'onClick': {} },
    to: "/about",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_24;
let __VLS_25;
let __VLS_26;
const __VLS_27 = {
    onClick: (...[$event]) => {
        __VLS_ctx.menuOpen = false;
    }
};
__VLS_23.slots.default;
var __VLS_23;
const __VLS_28 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ 'onClick': {} },
    to: "/portfolio",
    ...{ class: "nav-link" },
}));
const __VLS_30 = __VLS_29({
    ...{ 'onClick': {} },
    to: "/portfolio",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_32;
let __VLS_33;
let __VLS_34;
const __VLS_35 = {
    onClick: (...[$event]) => {
        __VLS_ctx.menuOpen = false;
    }
};
__VLS_31.slots.default;
var __VLS_31;
const __VLS_36 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ 'onClick': {} },
    to: "/services",
    ...{ class: "nav-link" },
}));
const __VLS_38 = __VLS_37({
    ...{ 'onClick': {} },
    to: "/services",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_40;
let __VLS_41;
let __VLS_42;
const __VLS_43 = {
    onClick: (...[$event]) => {
        __VLS_ctx.menuOpen = false;
    }
};
__VLS_39.slots.default;
var __VLS_39;
const __VLS_44 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    ...{ 'onClick': {} },
    to: "/contact",
    ...{ class: "nav-link" },
}));
const __VLS_46 = __VLS_45({
    ...{ 'onClick': {} },
    to: "/contact",
    ...{ class: "nav-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
let __VLS_48;
let __VLS_49;
let __VLS_50;
const __VLS_51 = {
    onClick: (...[$event]) => {
        __VLS_ctx.menuOpen = false;
    }
};
__VLS_47.slots.default;
var __VLS_47;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-wave" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 1440 100",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.linearGradient, __VLS_intrinsicElements.linearGradient)({
    id: "header-fade",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.stop)({
    offset: "0%",
    'stop-color': "var(--vt-c-indigo)",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.stop)({
    offset: "100%",
    'stop-color': "#8ec5fc",
    'stop-opacity': "0.9",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,40 C480,100 960,0 1440,60 L1440,100 L0,100 Z",
    fill: "url(#header-fade)",
});
/** @type {__VLS_StyleScopedClasses['header-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['header-content']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-button']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop-only']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
/** @type {__VLS_StyleScopedClasses['close-button']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['header-wave']} */ ;
var __VLS_dollars;
let __VLS_self;
