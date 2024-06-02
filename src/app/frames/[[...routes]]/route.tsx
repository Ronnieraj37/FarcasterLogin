/** @jsxImportSource @airstack/frog/jsx */
import { Button, Frog, TextInput } from "@airstack/frog";
import { handle } from "@airstack/frog/next";
import { devtools } from "@airstack/frog/dev";
import { serveStatic } from "@airstack/frog/serve-static";
const axios = require("axios");

const app = new Frog({
  apiKey: process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string,
  basePath: "/frames",
});

app.frame("/", (c) => {
  const { buttonValue, inputText, status } = c;
  const fruit = inputText || buttonValue;
  return c.res({
    action: "/submit",
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        {"Dog Search"}
      </div>
    ),
    intents: [
      <TextInput key={0} placeholder="Enter.." />,
      <Button key={1}>Submit</Button>,
    ],
  });
});

// Frame to display user's response.
app.frame("/submit", async (c) => {
  const { buttonValue, inputText } = c;
  let value;
  await axios
    .get("https://random.dog/woof.json")
    .then((response: any) => {
      console.log(response.data.url);
      value = response.data.url;
    })
    .catch((error: any) => {
      console.error(error);
    });

  return c.res({
    action: "/submit",
    image: `${value}`,
    intents: [<Button key={0}>Next</Button>],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
