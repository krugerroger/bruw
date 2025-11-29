export type Data = {
    name: string,
    email: string,
    message: string
}
export const submitFormData = async (data: Data) => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch("https://submit-form.com/bQYMnVgt7", {
      method: "POST",
      body: formData,
    });

    const text = await response.text();
    console.log("Statut HTTP :", response.status);
    console.log("Réponse brute :", text);

    if (!response.ok) {
      throw new Error(`Échec HTTP : ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Erreur attrapée :", error);
    return false;
  }
};
