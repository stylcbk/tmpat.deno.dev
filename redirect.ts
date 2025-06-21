// redirect.ts

const redirectUrl = "https://paatlco.icu/pal/Pat";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
