import { VueWriter } from 'vue-writer';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const formSubmitted = ref(false);
onMounted(() => {
    if (route.query.submitted === 'true') {
        formSubmitted.value = true;
    }
});
export default (await import('vue')).defineComponent({
    name: 'ContactView',
    components: {
        VueWriter,
    },
    data() {
        return {
            showWriter: true,
            showParagraph: false,
            typedCount: 0,
            slideInActive: false,
        };
    },
    methods: {
        handleTyped(word) {
            this.typedCount += 1;
            if (this.typedCount === 2) {
                this.showParagraph = true;
                this.showWriter = false;
                this.finalText = "Let's get in touch!";
                setTimeout(() => {
                    this.slideInActive = true;
                }, 50);
            }
        },
    },
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    VueWriter,
};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['contact']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-form']} */ ;
/** @type {__VLS_StyleScopedClasses['vue-typer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "app" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "left" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-container" },
});
if (__VLS_ctx.showWriter) {
    const __VLS_0 = {}.VueWriter;
    /** @type {[typeof __VLS_components.VueWriter, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onTyped': {} },
        array: (['Ready to get started?', 'Let\'s get in touch!']),
        iterations: (1),
        repeat: (false),
        typeSpeed: (100),
        caret: (__VLS_ctx.cursor),
        eraseSpeed: (20),
        ...{ class: "vue-typer" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onTyped': {} },
        array: (['Ready to get started?', 'Let\'s get in touch!']),
        iterations: (1),
        repeat: (false),
        typeSpeed: (100),
        caret: (__VLS_ctx.cursor),
        eraseSpeed: (20),
        ...{ class: "vue-typer" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_4;
    let __VLS_5;
    let __VLS_6;
    const __VLS_7 = {
        onTyped: (__VLS_ctx.handleTyped)
    };
    var __VLS_3;
}
if (!__VLS_ctx.showWriter) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "vue-typer" },
    });
    (__VLS_ctx.finalText);
}
if (__VLS_ctx.showParagraph) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "fade-in" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "right" },
    ...{ class: ({ 'slide-in': __VLS_ctx.slideInActive }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.showParagraph) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "right" },
    ...{ class: ({ 'slide-in': __VLS_ctx.slideInActive }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.showParagraph) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "contact-form" },
});
if (__VLS_ctx.formSubmitted) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        action: "https://formspree.io/f/manjwzpn?redirect=/contact?submitted=true",
        method: "POST",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "text",
        name: "firstName",
        placeholder: "First name",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "text",
        name: "lastName",
        placeholder: "Last name",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "email",
        name: "email",
        placeholder: "Email address",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        name: "service",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        disabled: true,
        selected: true,
        value: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: "web design",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: "branding",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: "seo",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        name: "message",
        placeholder: "Your message...",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: "submit",
    });
}
/** @type {__VLS_StyleScopedClasses['app']} */ ;
/** @type {__VLS_StyleScopedClasses['contact']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-container']} */ ;
/** @type {__VLS_StyleScopedClasses['vue-typer']} */ ;
/** @type {__VLS_StyleScopedClasses['vue-typer']} */ ;
/** @type {__VLS_StyleScopedClasses['fade-in']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['slide-in']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['slide-in']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-form']} */ ;
var __VLS_dollars;
let __VLS_self;
