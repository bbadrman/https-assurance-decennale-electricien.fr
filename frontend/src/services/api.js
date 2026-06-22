const API_URL = 'https://aksam.azurewebsites.net/api';
const LOCAL_API_URL = 'https://ecennale-electricien-backend.ddev.site';

export const submitQuote = async (formData) => {
  try {
    // Send to external API (don't fail if external is down)
    fetch(`${API_URL}/prospects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch(() => null);

    // Send to local API (primary - saves to your local database)
    const localResponse = await fetch(`${LOCAL_API_URL}/api/leads`, {
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