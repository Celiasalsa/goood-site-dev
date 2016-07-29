// Maybe there is a better solution ?
// I tried to import handlebars tempaltes, but svg helper is server-side :(

export default function headerTemplate({ title, isHome }) {
  if (isHome) {
    return `
      <div class="slide__header">
        <div class="landing">
          <div class="landing__citation">
            <svg xmlns="http://www.w3.org/2000/svg" width="623" height="329" viewBox="0 0 623 329"><defs><style>.a{fill:#fc4c02;}.b{fill:#fff;}</style></defs><title>citation-damien</title><path class="a" d="M618,248.93a5,5,0,0,0-5,5v26.84a5,5,0,0,0,10,0V253.92A5,5,0,0,0,618,248.93ZM612.62,0H10.38A10.38,10.38,0,0,0,0,10.35v285A10.38,10.38,0,0,0,10.38,305.7H228.16l21.22,21.79a5,5,0,0,0,8.59-3.34l.51-18.45H568.24a5,5,0,1,0,0-10H253.61a5,5,0,0,0-5,4.86L248.29,312l-14.44-14.82a5,5,0,0,0-3.59-1.51H10.38a.37.37,0,0,1-.38-.36v-285a.37.37,0,0,1,.38-.36H612.62a.37.37,0,0,1,.38.36V237a5,5,0,0,0,10,0V10.35A10.38,10.38,0,0,0,612.62,0ZM36.78,40.43v44H68.84V73.91h-20V40.43ZM104.05,51V40.43H73.24v44h31.37V73.91H85.33V67h16v-9.8h-16V51Zm49.1,31.19a17.94,17.94,0,0,0,4.31-3.22,12.58,12.58,0,0,0,2.82-4.34l-9.86-5.89a7.68,7.68,0,0,1-3.19,4.18,7.24,7.24,0,0,1-2.14.93,8.94,8.94,0,0,1-2.17.28,7.28,7.28,0,0,1-3.75-1,8.92,8.92,0,0,1-2.79-2.57,11.83,11.83,0,0,1-1.74-3.72,16.25,16.25,0,0,1-.59-4.4,17.67,17.67,0,0,1,.5-4.12,11.55,11.55,0,0,1,1.58-3.72,8.83,8.83,0,0,1,2.73-2.67,7.3,7.3,0,0,1,3.94-1,10.65,10.65,0,0,1,2.17.25,7.41,7.41,0,0,1,2.23.87,7.76,7.76,0,0,1,2,1.67,8.21,8.21,0,0,1,1.46,2.67l9.24-6.57a16.39,16.39,0,0,0-6.51-7A19.66,19.66,0,0,0,143,40.18a20.17,20.17,0,0,0-9,1.92,21.39,21.39,0,0,0-10.88,12,23,23,0,0,0-1.43,7.94,23.28,23.28,0,0,0,1.55,8.31,24.47,24.47,0,0,0,4.31,7.32,21.27,21.27,0,0,0,6.6,5.18,18.34,18.34,0,0,0,8.43,2,22.67,22.67,0,0,0,10.48-2.67Zm11.66-41.73v44H176.9V67.21h14.76V84.45h12.09v-44H191.66V56.67H176.9V40.43Zm57.66,35.4h11.72l2.67,8.62h12.77l-16.37-44h-9.8L207,84.45h12.83ZM228.36,53l3.91,14.76h-8ZM292.1,84.45v-44H280V62.81L262.34,40.43h-9.42v44H265V62.81l17.48,21.64Zm35,0h10V61h-18.1v8.68h7.75a13.6,13.6,0,0,1-3.87,3.22A9,9,0,0,1,318.51,74a7.87,7.87,0,0,1-3.63-.84,8.31,8.31,0,0,1-2.82-2.36,11.28,11.28,0,0,1-1.83-3.63,17.27,17.27,0,0,1,0-9.39,12,12,0,0,1,1.8-3.69,8.44,8.44,0,0,1,2.73-2.42,7,7,0,0,1,3.44-.87,8.25,8.25,0,0,1,4.8,1.58,9.62,9.62,0,0,1,3.38,4.18l9-6.88a16.08,16.08,0,0,0-2.82-4,18,18,0,0,0-3.87-3A18.25,18.25,0,0,0,324,40.77a21.42,21.42,0,0,0-5.33-.65,20.7,20.7,0,0,0-8.37,1.71,21.17,21.17,0,0,0-11.32,11.59,22.53,22.53,0,0,0-1.64,8.65,24.08,24.08,0,0,0,6,15.93,21.2,21.2,0,0,0,6.42,4.93,17.1,17.1,0,0,0,7.75,1.83,13.61,13.61,0,0,0,9.61-3.91Zm47.31-10.54H355.09V67h16v-9.8h-16V51h18.72V40.43H343v44h31.37Zm31.56,3.66,7.38-16.31V84.45h12.09v-44H412.25L402.7,61.13l-9.49-20.71H380v44H392.1V61.26l7.38,16.31Zm58.4-3.66H445V67h16v-9.8H445V51h18.72V40.43H433v44h31.37Zm44.83,10.54v-44H497.06V62.81L479.39,40.43H470v44h12.09V62.81l17.48,21.64ZM538.36,51H551V40.43H513.56V51h12.71V84.45h12.09Zm49.88-8.25a13,13,0,0,0-4.37-2.17,17.54,17.54,0,0,0-4.77-.68A15,15,0,0,0,571.15,42a12.41,12.41,0,0,0-5.08,5.89l7.5,5.33a8.78,8.78,0,0,0,.78-1.09,7.82,7.82,0,0,1,1-1.27,5.52,5.52,0,0,1,1.4-1.05,4,4,0,0,1,1.92-.43,4.22,4.22,0,0,1,2.6.84,2.68,2.68,0,0,1,1.12,2.26,3.59,3.59,0,0,1-.93,2.39,11.18,11.18,0,0,1-2.2,2,20.18,20.18,0,0,1-2.54,1.49q-1.27.62-2,1a9.86,9.86,0,0,0-2.67,1.92,7.67,7.67,0,0,0-1.49,2.2,8,8,0,0,0-.62,2.42q-.12,1.27-.12,2.57h9.61a2.33,2.33,0,0,1,.78-1.74,9.85,9.85,0,0,1,2-1.43q1.21-.68,2.64-1.36a21.16,21.16,0,0,0,2.79-1.61,10.28,10.28,0,0,0,3.88-4.31,13.26,13.26,0,0,0,1.09-5.42,13.07,13.07,0,0,0-1.21-5.89A11,11,0,0,0,588.23,42.72Zm-8.59,31.56H570V84.45h9.61ZM36.78,148.45H48.87V134.93h7.19A13.71,13.71,0,0,0,62,133.66a14,14,0,0,0,4.59-3.41,16.14,16.14,0,0,0,4-10.57,14.69,14.69,0,0,0-1.12-5.55,16.22,16.22,0,0,0-3.07-4.9,15.47,15.47,0,0,0-4.68-3.47,13.38,13.38,0,0,0-6-1.33h-19ZM48.87,115h6.08a3.39,3.39,0,0,1,2.23,1q1.12,1,1.12,3.72t-1,3.69a2.83,2.83,0,0,1-2.08,1H48.87ZM83,139.83H94.69l2.67,8.62h12.77l-16.37-44H84l-16.43,44H80.37ZM88.86,117l3.91,14.76h-8Zm43.37,20.55a5.2,5.2,0,0,1-2.76.53,17.91,17.91,0,0,1-5.11-.74,32.07,32.07,0,0,1-4.49-1.67,36.34,36.34,0,0,1-4.53-2.42l-5.21,10.6a30.86,30.86,0,0,0,4.31,2.11,44.14,44.14,0,0,0,4.84,1.61,42.87,42.87,0,0,0,5.05,1.05,34.23,34.23,0,0,0,5,.37,26.16,26.16,0,0,0,6-.71,16.21,16.21,0,0,0,5.39-2.32,12,12,0,0,0,3.84-4.31A13.89,13.89,0,0,0,146,135a13.36,13.36,0,0,0-.93-5.27,10.16,10.16,0,0,0-2.67-3.69,17.05,17.05,0,0,0-4.18-2.64,45.17,45.17,0,0,0-5.49-2q-1.92-.62-3.44-1.05a20.06,20.06,0,0,1-2.57-.9,5.28,5.28,0,0,1-1.61-1,1.93,1.93,0,0,1-.56-1.43,1.73,1.73,0,0,1,1-1.67,5.64,5.64,0,0,1,2.57-.5,13.54,13.54,0,0,1,4.06.65,35.17,35.17,0,0,1,3.75,1.4,33.93,33.93,0,0,1,3.84,2l5.21-10q-1.49-.74-3.35-1.58a42.6,42.6,0,0,0-4-1.55,37.84,37.84,0,0,0-4.43-1.18,23.66,23.66,0,0,0-4.71-.47,20,20,0,0,0-6.23,1,16.23,16.23,0,0,0-5.24,2.82,13.23,13.23,0,0,0-3.63,4.65,14.79,14.79,0,0,0-1.33,6.45,12.93,12.93,0,0,0,.65,4.28,9.29,9.29,0,0,0,2,3.32,13.59,13.59,0,0,0,3.47,2.6,32.24,32.24,0,0,0,5,2.14q2,.68,3.75,1.18t3.13,1a7.12,7.12,0,0,1,2.14,1.15,2,2,0,0,1,.78,1.58A1.61,1.61,0,0,1,132.23,137.57Zm78.46,10.88v-44H197.55L188,125.13l-9.49-20.71H165.31v44H177.4V125.26l7.38,16.31h6.45l7.38-16.31v23.19Zm18.72-8.62h11.72l2.67,8.62h12.77l-16.37-44h-9.8l-16.43,44h12.83ZM235.3,117l3.91,14.76h-8Zm24.55,31.43h12.09v-44H259.86Zm31.74-21.64,17.48,21.64h9.61v-44H306.6v22.38l-17.67-22.38h-9.42v44H291.6Zm56.3,21.64V115h12.65V104.43H323.09V115H335.8v33.48Zm48.42-10.54H377V131h16v-9.8H377V115h18.72V104.43H364.94v44h31.37ZM414,126.81l17.48,21.64h9.61v-44H429.05v22.38l-17.67-22.38H402v44H414Zm45.82,13h11.72l2.67,8.62H487l-16.37-44h-9.8l-16.43,44h12.83ZM465.75,117l3.91,14.76h-8Zm36.64,9.8,17.48,21.64h9.61v-44H517.4v22.38l-17.67-22.38h-9.42v44H502.4Zm56.3,21.64V115h12.65V104.43H533.89V115H546.6v33.48Zm12.77,0H581V137h-9.55Z"/><path class="b" d="M39.65,208.45H59.09v-6H46.75V177.15h-7.1Z"/><path class="b" d="M61.82,196.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69L80,202.06a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18H82.9a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C67.34,184.06,61.82,188.81,61.82,196.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M104.88,206.53a8.25,8.25,0,0,0,5.66,2.5c5.14,0,10-4.7,10-12.87,0-7.34-3.55-12.1-9.31-12.1A10.46,10.46,0,0,0,104.5,187h-.19l-.48-2.35H98.06v32.64h7.06v-7Zm.24-4.8V192c1.39-1.49,2.64-2.16,4.08-2.16,2.83,0,4.13,2.16,4.13,6.43,0,4.9-2,7-4.42,7A5.48,5.48,0,0,1,105.12,201.73Z"/><path class="b" d="M129.07,181.13c2.4,0,4.08-1.54,4.08-3.7s-1.68-3.65-4.08-3.65-4.08,1.49-4.08,3.65A3.77,3.77,0,0,0,129.07,181.13Zm-3.5,27.31h7.06V184.64h-7.06Z"/><path class="b" d="M138.81,208.45h7.06V194.62c1.25-3.22,3.46-4.37,5.23-4.37a8.89,8.89,0,0,1,2.59.38l1.15-6.1a6.84,6.84,0,0,0-2.83-.48c-2.45,0-5,1.54-6.77,4.75h-.19l-.48-4.18h-5.76Z"/><path class="b" d="M156,196.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69l-2.35-4.27a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18h14.26a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C161.57,184.06,156,188.81,156,196.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M182.83,217.76c5.62-1.68,8.64-5.66,8.64-10.94,0-4.18-1.73-6.67-4.9-6.67-2.45,0-4.42,1.58-4.42,4a4,4,0,0,0,4.27,4h.38c0,2.45-1.92,4.61-5.42,5.86Z"/><path class="b" d="M205.29,196.54c0,7.92,5.14,12.48,11.76,12.48a12.36,12.36,0,0,0,7.92-3l-2.83-4.46a6.86,6.86,0,0,1-4.27,1.73c-3.07,0-5.33-2.64-5.33-6.77s2.16-6.77,5.57-6.77a5.09,5.09,0,0,1,3.31,1.39l3.22-4.37a9.61,9.61,0,0,0-7-2.74C211.1,184.06,205.29,188.62,205.29,196.54Z"/><path class="b" d="M230.92,191.55c4.61-2.26,6.86-5.76,6.86-10.27,0-4-1.58-6.29-4.51-6.29a3.62,3.62,0,0,0-3.7,3.94,3.45,3.45,0,0,0,3.7,3.5,1.33,1.33,0,0,0,.43,0c0,2.88-1.44,4.66-4.32,6.1Z"/><path class="b" d="M241,196.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69l-2.35-4.27a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18H262a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C246.48,184.06,241,188.81,241,196.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M265.1,205.71a15.37,15.37,0,0,0,9.12,3.31c6.38,0,9.79-3.36,9.79-7.68s-3.41-6-6.43-7.15c-2.45-.91-4.66-1.49-4.66-3,0-1.2.86-1.87,2.69-1.87a8.78,8.78,0,0,1,5,2l3.17-4.22a13.7,13.7,0,0,0-8.4-3c-5.52,0-9.12,3-9.12,7.44,0,3.94,3.41,5.9,6.29,7,2.45,1,4.85,1.68,4.85,3.26,0,1.25-.91,2-3,2a10.26,10.26,0,0,1-6.14-2.5Z"/><path class="b" d="M289.44,199.81c0,5.52,2.3,9.22,8.21,9.22a17.15,17.15,0,0,0,5.28-.86l-1.1-5.14a6.74,6.74,0,0,1-2.26.48c-1.87,0-3.07-1.1-3.07-3.79v-9.55h5.71v-5.52h-5.71V178.3h-5.86l-.82,6.34-3.65.29v5.23h3.26Z"/><path class="b" d="M315.6,196.54c0,7.78,3.84,12.48,9.74,12.48a9.05,9.05,0,0,0,6-2.64l-.29,3.65v7.25h7.06V184.64h-5.52L332,187h-.19a8,8,0,0,0-6.34-2.93C320.44,184.06,315.6,188.77,315.6,196.54Zm7.25-.1c0-4.51,2-6.62,4.27-6.62a5.64,5.64,0,0,1,3.94,1.54v9.74a4.47,4.47,0,0,1-3.89,2.16C324.43,203.26,322.84,201.15,322.84,196.45Z"/><path class="b" d="M344.06,199.42c0,6,2.21,9.6,7.39,9.6,3.26,0,5.47-1.49,7.49-3.89h.14l.53,3.31h5.76V184.64h-7.06v15.75c-1.39,1.87-2.45,2.64-4.22,2.64-2.06,0-3-1.1-3-4.51V184.64h-7.06Z"/><path class="b" d="M370.17,196.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69l-2.35-4.27a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18h14.26a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C375.69,184.06,370.17,188.81,370.17,196.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M37.73,244.54c0,7.92,5.14,12.48,11.76,12.48a12.36,12.36,0,0,0,7.92-3l-2.83-4.46a6.86,6.86,0,0,1-4.27,1.73c-3.07,0-5.33-2.64-5.33-6.77s2.16-6.77,5.57-6.77a5.09,5.09,0,0,1,3.31,1.39l3.22-4.37a9.61,9.61,0,0,0-7-2.74C43.54,232.06,37.73,236.62,37.73,244.54Z"/><path class="b" d="M58.8,244.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69l-2.35-4.27a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18H79.87a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C64.32,232.06,58.8,236.81,58.8,244.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M85.06,256.45h7.06V242.62c1.25-3.22,3.46-4.37,5.23-4.37a8.89,8.89,0,0,1,2.59.38l1.15-6.1a6.84,6.84,0,0,0-2.83-.48c-2.45,0-5,1.54-6.77,4.75H91.3l-.48-4.18H85.06Z"/><path class="b" d="M105.12,247.81c0,5.52,2.3,9.22,8.21,9.22a17.14,17.14,0,0,0,5.28-.86L117.5,251a6.74,6.74,0,0,1-2.26.48c-1.87,0-3.07-1.1-3.07-3.79v-9.55h5.71v-5.52h-5.71V226.3h-5.86l-.82,6.34-3.65.29v5.23h3.26Z"/><path class="b" d="M121.1,249.82a6.84,6.84,0,0,0,7.06,7.2,10.48,10.48,0,0,0,7-3h.14l.53,2.45h5.76V242.81c0-7.3-3.36-10.75-9.46-10.75a19.68,19.68,0,0,0-10.18,3.12l2.5,4.66a12.81,12.81,0,0,1,6.34-2.16c2.54,0,3.6,1.34,3.74,3.46C125.09,242.09,121.1,244.83,121.1,249.82Zm6.72-.53c0-1.82,1.63-3.26,6.67-3.94v4.18c-1.25,1.25-2.3,2-3.94,2S127.82,250.83,127.82,249.29Z"/><path class="b" d="M151.1,229.13c2.4,0,4.08-1.54,4.08-3.7s-1.68-3.65-4.08-3.65-4.08,1.49-4.08,3.65A3.77,3.77,0,0,0,151.1,229.13Zm-3.5,27.31h7.06V232.64H147.6Z"/><path class="b" d="M160.85,256.45h7.06V240.37c1.54-1.49,2.64-2.3,4.42-2.3,2,0,2.93,1.06,2.93,4.51v13.87h7.06V241.66c0-6-2.21-9.6-7.39-9.6-3.22,0-5.62,1.68-7.63,3.6h-.19l-.48-3h-5.76Z"/><path class="b" d="M186.19,253.71a15.37,15.37,0,0,0,9.12,3.31c6.38,0,9.79-3.36,9.79-7.68s-3.41-6-6.43-7.15c-2.45-.91-4.66-1.49-4.66-3,0-1.2.86-1.87,2.69-1.87a8.78,8.78,0,0,1,5,2l3.17-4.22a13.7,13.7,0,0,0-8.4-3c-5.52,0-9.12,3-9.12,7.44,0,3.94,3.41,5.9,6.29,7,2.45,1,4.85,1.68,4.85,3.26,0,1.25-.91,2-3,2a10.26,10.26,0,0,1-6.14-2.5Z"/><path class="b" d="M219.55,249.05c0,4.8,1.63,8,6.48,8a9.2,9.2,0,0,0,3.55-.58l-.86-5.23a3,3,0,0,1-.86.1c-.58,0-1.25-.48-1.25-2V222.8h-7.06Z"/><path class="b" d="M231.88,244.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69L250,250.06a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18H253a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C237.41,232.06,231.88,236.81,231.88,244.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M274.94,254.53a8.25,8.25,0,0,0,5.66,2.5c5.14,0,10-4.7,10-12.87,0-7.34-3.55-12.1-9.31-12.1a10.46,10.46,0,0,0-6.77,2.93h-.19l-.48-2.35h-5.76v32.64h7.06v-7Zm.24-4.8V240c1.39-1.49,2.64-2.16,4.08-2.16,2.83,0,4.13,2.16,4.13,6.43,0,4.9-2,7-4.42,7A5.47,5.47,0,0,1,275.18,249.73Z"/><path class="b" d="M294.24,244.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69l-2.35-4.27a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18h14.26a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C299.76,232.06,294.24,236.81,294.24,244.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M320.49,256.45h7.06V240.37c1.54-1.49,2.64-2.3,4.42-2.3,2,0,2.93,1.06,2.93,4.51v13.87h7.06V241.66c0-6-2.21-9.6-7.39-9.6-3.22,0-5.62,1.68-7.63,3.6h-.19l-.48-3h-5.76Z"/><path class="b" d="M345.83,253.71A15.37,15.37,0,0,0,355,257c6.38,0,9.79-3.36,9.79-7.68s-3.41-6-6.43-7.15c-2.45-.91-4.66-1.49-4.66-3,0-1.2.86-1.87,2.69-1.87a8.78,8.78,0,0,1,5,2l3.17-4.22a13.7,13.7,0,0,0-8.4-3c-5.52,0-9.12,3-9.12,7.44,0,3.94,3.41,5.9,6.29,7,2.45,1,4.85,1.68,4.85,3.26,0,1.25-.91,2-3,2a10.26,10.26,0,0,1-6.14-2.5Z"/><path class="b" d="M367.82,244.54c0,7.87,5.23,12.48,12,12.48a15.58,15.58,0,0,0,8.45-2.69L386,250.06a9.59,9.59,0,0,1-5.14,1.58c-3.17,0-5.57-1.58-6.19-5.18h14.26a14,14,0,0,0,.29-3c0-6.48-3.36-11.43-10.13-11.43C373.34,232.06,367.82,236.81,367.82,244.54Zm6.77-2.45c.48-3.17,2.4-4.66,4.61-4.66,2.83,0,4,1.92,4,4.66Z"/><path class="b" d="M394.07,256.45h7.06V240.37c1.54-1.49,2.64-2.3,4.42-2.3,2,0,2.93,1.06,2.93,4.51v13.87h7.06V241.66c0-6-2.21-9.6-7.39-9.6-3.22,0-5.62,1.68-7.63,3.6h-.19l-.48-3h-5.76Z"/><path class="b" d="M422.49,247.81c0,5.52,2.3,9.22,8.21,9.22a17.14,17.14,0,0,0,5.28-.86l-1.1-5.14a6.74,6.74,0,0,1-2.26.48c-1.87,0-3.07-1.1-3.07-3.79v-9.55h5.71v-5.52h-5.71V226.3h-5.86l-.82,6.34-3.65.29v5.23h3.26Z"/><path class="b" d="M439.91,252.61a4.28,4.28,0,1,0,4.27-4.46A4.26,4.26,0,0,0,439.91,252.61Z"/></svg>
          </div>
          <div class="landing__buttons">
            <button class="btn btn--primary">
              Vision
            </button>
            <button class="btn">
              Références
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="slide__header">
      <div class="slide__title">
        ${title}
      </div>
    </div>
  `;
}