export const updateData = async (textID, file, updatedText) => {
  const updatingBaseUrl = `http://localhost:5001/update/${file}/${textID}`;
  if (textID && updatedText) {
    try {
      const response = await fetch(updatingBaseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedText),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update the data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in update data:", error);
      throw error;
    }
  }
};

export const handleUpdating = async (fileName, id, newText, refetchData) => {
  try {
    const result = await updateData(id, fileName, { text: newText });
    console.log(result.message);
    refetchData();
  } catch (error) {
    console.error("Update failed:", error);
  }
};
