const API_URL = process.env.REACT_APP_API_URL || 'https://www.test.peri-enligne.fr/api';

export const submitQuote = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let errorMessage = 'Erreur lors de l\'envoi du formulaire';
      try {
        const errorData = await response.json();
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

    return await response.json();
  } catch (error) {
    console.error('Error submitting quote:', error);
    throw error;
  }
};
