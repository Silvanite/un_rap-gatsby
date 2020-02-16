import tw from "tailwind.macro"

export const H1 = tw.h1`text-4xl text-red-500 font-display font-light leading-tight px-8 pb-4 pt-8 mb-4 text-gray-800 block border-b-4 border-orange-100 max-w-2xl mx-auto`
export const P = tw.p`leading-relaxed px-8 mb-8 block text-lg text-gray-800 max-w-2xl mx-auto`
export const A = tw.a`leading-relaxed text-lg max-w-2xl mx-auto text-orange-500 underline hover:no-underline`

export default {
    H1,
    P,
    A,
}
