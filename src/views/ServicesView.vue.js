import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
const isOpen = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
function toggleAccordion() {
    isOpen.value = !isOpen.value;
}
function toggleAccordion2() {
    isOpen2.value = !isOpen2.value;
}
function toggleAccordion3() {
    isOpen3.value = !isOpen3.value;
}
// ⬇️ Smooth scroll to hash
const route = useRoute();
function scrollToHash(hash) {
    if (hash) {
        nextTick(() => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
onMounted(() => {
    scrollToHash(route.hash);
});
watch(() => route.hash, (newHash) => {
    scrollToHash(newHash);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['section-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['double-wave']} */ ;
/** @type {__VLS_StyleScopedClasses['section-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['service-image']} */ ;
/** @type {__VLS_StyleScopedClasses['service-number']} */ ;
/** @type {__VLS_StyleScopedClasses['service-link']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-list']} */ ;
/** @type {__VLS_StyleScopedClasses['service-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-content']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-list']} */ ;
/** @type {__VLS_StyleScopedClasses['service-image']} */ ;
/** @type {__VLS_StyleScopedClasses['service-text']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-body']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "background" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "services" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "hero-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "hero-heading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "emphasized-web" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "emphasized-word" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "emphasized-word" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "hero-body" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "emphasized-word" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-divider double-wave" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 1440 200",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.linearGradient, __VLS_intrinsicElements.linearGradient)({
    id: "fade-to-bg",
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
    'stop-color': "#e0c3fc",
    'stop-opacity': "0",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,40 C360,160 1080,0 1440,100 L1440,200 L0,200 Z",
    fill: "var(--vt-c-purple)",
    opacity: "0.3",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,60 C480,180 960,20 1440,120 L1440,200 L0,200 Z",
    fill: "url(#fade-to-bg)",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-wrapper" },
    id: "brand-strategy",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/src/assets/images/brand-strategy.jpeg",
    alt: "Moodboard showing branding strategy concept",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "service-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "service-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "service-description" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleAccordion) },
    ...{ class: "accordion" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.isOpen ? '–' : '+');
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "accordion",
    persisted: true,
}));
const __VLS_2 = __VLS_1({
    name: "accordion",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-content" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isOpen) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "accordion-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "accordion-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-divider curve-up" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 1440 150",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.linearGradient, __VLS_intrinsicElements.linearGradient)({
    id: "fade-curve",
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
    'stop-color': "#e0c3fc",
    'stop-opacity': "0",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,100 C200,0 1240,200 1440,100 L1440,150 L0,150 Z",
    fill: "var(--vt-c-text-light-2)",
    opacity: "0.2",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,120 C200,20 1240,180 1440,120 L1440,150 L0,150 Z",
    fill: "url(#fade-curve)",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-wrapper flipped" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "service-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "service-title" },
    id: "web-design",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "service-description" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleAccordion2) },
    ...{ class: "accordion" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.isOpen2 ? '–' : '+');
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_4 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    name: "accordion",
    persisted: true,
}));
const __VLS_6 = __VLS_5({
    name: "accordion",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-content" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isOpen2) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "accordion-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "accordion-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/src/assets/images/web-design.jpeg",
    alt: "Modern website design on desktop and mobile devices",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-divider angled-wave" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    viewBox: "0 0 1440 150",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.linearGradient, __VLS_intrinsicElements.linearGradient)({
    id: "fade-angle",
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
    'stop-color': "#e0c3fc",
    'stop-opacity': "0",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,20 C150,80 1290,80 1440,20 L1440,150 L0,150 Z",
    fill: "var(--vt-c-purple)",
    opacity: "0.3",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    d: "M0,40 C200,100 1240,100 1440,40 L1440,150 L0,150 Z",
    fill: "url(#fade-angle)",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/src/assets/images/Donati Designs.png",
    alt: "Donati Designs logo on brown background with laptop in view",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "service-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "service-number" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "service-title" },
    id: "custom-services",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "service-description" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleAccordion3) },
    ...{ class: "accordion" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.isOpen3 ? '–' : '+');
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
const __VLS_8 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    name: "accordion",
    persisted: true,
}));
const __VLS_10 = __VLS_9({
    name: "accordion",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-content" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isOpen3) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "accordion-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "accordion-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
var __VLS_11;
/** @type {__VLS_StyleScopedClasses['background']} */ ;
/** @type {__VLS_StyleScopedClasses['services']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-image']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['emphasized-web']} */ ;
/** @type {__VLS_StyleScopedClasses['emphasized-word']} */ ;
/** @type {__VLS_StyleScopedClasses['emphasized-word']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-body']} */ ;
/** @type {__VLS_StyleScopedClasses['emphasized-word']} */ ;
/** @type {__VLS_StyleScopedClasses['section-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['double-wave']} */ ;
/** @type {__VLS_StyleScopedClasses['service-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['service-image']} */ ;
/** @type {__VLS_StyleScopedClasses['service-text']} */ ;
/** @type {__VLS_StyleScopedClasses['service-header']} */ ;
/** @type {__VLS_StyleScopedClasses['service-number']} */ ;
/** @type {__VLS_StyleScopedClasses['service-title']} */ ;
/** @type {__VLS_StyleScopedClasses['service-description']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-content']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-list']} */ ;
/** @type {__VLS_StyleScopedClasses['section-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['curve-up']} */ ;
/** @type {__VLS_StyleScopedClasses['service-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flipped']} */ ;
/** @type {__VLS_StyleScopedClasses['service-text']} */ ;
/** @type {__VLS_StyleScopedClasses['service-header']} */ ;
/** @type {__VLS_StyleScopedClasses['service-number']} */ ;
/** @type {__VLS_StyleScopedClasses['service-title']} */ ;
/** @type {__VLS_StyleScopedClasses['service-description']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-content']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-list']} */ ;
/** @type {__VLS_StyleScopedClasses['service-image']} */ ;
/** @type {__VLS_StyleScopedClasses['section-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['angled-wave']} */ ;
/** @type {__VLS_StyleScopedClasses['service-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['service-image']} */ ;
/** @type {__VLS_StyleScopedClasses['service-text']} */ ;
/** @type {__VLS_StyleScopedClasses['service-header']} */ ;
/** @type {__VLS_StyleScopedClasses['service-number']} */ ;
/** @type {__VLS_StyleScopedClasses['service-title']} */ ;
/** @type {__VLS_StyleScopedClasses['service-description']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-content']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['accordion-list']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isOpen: isOpen,
            isOpen2: isOpen2,
            isOpen3: isOpen3,
            toggleAccordion: toggleAccordion,
            toggleAccordion2: toggleAccordion2,
            toggleAccordion3: toggleAccordion3,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
