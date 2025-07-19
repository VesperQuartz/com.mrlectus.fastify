import { describe, test } from "node:test";
import { build } from "./helper";

describe("test app routes", () => {
	test("GET /healthcheck", async (t) => {
		const app = await build(t);
		const response = await app.inject({
			method: "GET",
			path: "/healthcheck",
		});
		t.assert.deepEqual(response.statusCode, 200);
	});
});
