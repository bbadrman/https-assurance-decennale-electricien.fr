const API_URL = 'https://assurance-decennale-electricien.fr';

export const submitQuote = async (formData) => {
  try {
    const localResponse = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!localResponse.ok) {
      let errorMessage = 'Erreur lors de l\'envoi du formulaire';
      try {
        const errorData = await localResponse.json();
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorMessage = errorData.errors.join(', ');
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // Fallback to text if not JSON
      }
      throw new Error(errorMessage);
    }

    return await localResponse.json();
  } catch (error) {
    console.error('Error submitting quote:', error);
    throw error;
  }
};