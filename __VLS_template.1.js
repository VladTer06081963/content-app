import MistralComponent from '~/components/MistralComponent.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './app.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'NuxtLayout', typeof __VLS_localComponents, "NuxtLayout", "NuxtLayout", "NuxtLayout"> &
__VLS_WithComponent<'MistralComponent', typeof __VLS_localComponents, "MistralComponent", "MistralComponent", "MistralComponent"> &
__VLS_WithComponent<'MyHello', typeof __VLS_localComponents, "MyHello", "MyHello", "MyHello">;
__VLS_components.NuxtLayout;
// @ts-ignore
[NuxtLayout,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.MistralComponent;
// @ts-ignore
[MistralComponent,];
__VLS_components.MyHello;
// @ts-ignore
[MyHello,];
{
const __VLS_0 = ({} as 'NuxtLayout' extends keyof typeof __VLS_ctx ? { 'NuxtLayout': typeof __VLS_ctx.NuxtLayout; } : typeof __VLS_resolvedLocalAndGlobalComponents).NuxtLayout;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { NuxtLayout: typeof __VLS_0; }).NuxtLayout;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("p-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("p-3"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'MistralComponent' extends keyof typeof __VLS_ctx ? { 'MistralComponent': typeof __VLS_ctx.MistralComponent; } : typeof __VLS_resolvedLocalAndGlobalComponents).MistralComponent;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { MistralComponent: typeof __VLS_15; }).MistralComponent;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_20 = ({} as 'MyHello' extends keyof typeof __VLS_ctx ? { 'MyHello': typeof __VLS_ctx.MyHello; } : typeof __VLS_resolvedLocalAndGlobalComponents).MyHello;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { MyHello: typeof __VLS_20; }).MyHello;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
