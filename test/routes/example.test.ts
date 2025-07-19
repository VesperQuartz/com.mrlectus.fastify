import * as assert from "node:assert";
import { test } from "node:test";
import { build } from "../helper.js";

test("health is loaded", async (t) => {
	const app = await build(t);

	const res = await app.inject({
		url: "/healthcheck",
	});

	assert.equal(res.payload, JSON.stringify({ health: "Good!!!" }));
});
