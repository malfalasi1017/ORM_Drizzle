import { createUser } from "$lib/queries/insert";
import { getUsers } from "$lib/queries/select";
import { updateUser } from "$lib/queries/update";
import { deleteUser } from "$lib/queries/delete";
import { redirect, fail } from "@sveltejs/kit";

export const actions = {
  createUser: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const age = Number(formData.get("age"));
    const email = formData.get("email");

    try {
      await createUser({ name: name as string, age, email: email as string });
      throw redirect(303, "/");
    } catch (error) {
      return fail(400, { error: (error as Error).message });
    }
  },

  updateUser: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));
    const name = formData.get("name");
    const age = Number(formData.get("age"));
    const email = formData.get("email");

    try {
      await updateUser(id, name as string, age, email as string);
      throw redirect(303, "/");
    } catch (error) {
      return fail(400, { error: (error as Error).message });
    }
  },

  deleteUser: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));

    try {
      await deleteUser(id);
      throw redirect(303, "/");
    } catch (error) {
      return fail(400, { error: (error as Error).message });
    }
  },
};
