// redirect.ts

const redirectUrl = "https://pailco.icu/pcu/Pat/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
