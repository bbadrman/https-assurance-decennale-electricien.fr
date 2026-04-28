# CORS Configuration for Symfony 8 Backend

## Overview
This document describes the CORS (Cross-Origin Resource Sharing) setup for the Ecennale Electricien backend API, enabling secure communication between the React frontend (localhost:3000) and the Symfony backend (DDEV).

## Files Modified

### 1. `config/packages/nelmio_cors.yaml`
Main CORS configuration file for NelmioCorsBundle.

**Key Settings:**
- `allow_origin`: Allows requests from `localhost` and `127.0.0.1` with any port
- `allow_methods`: GET, POST, PUT, PATCH, DELETE, OPTIONS
- `allow_headers`: Content-Type, Authorization, X-Requested-With, Origin, Accept, Referer, User-Agent
- `max_age`: 3600 seconds (1 hour) for preflight cache
- `origin_regex`: true (enables regex matching for origins)

### 2. `.env`
Environment variables for CORS configuration.

**Variables:**
- `CORS_ALLOW_ORIGIN`: Regex pattern for allowed origins
- `CORS_ALLOW_METHODS`: Allowed HTTP methods
- `CORS_ALLOW_HEADERS`: Allowed request headers
- `CORS_MAX_AGE`: Preflight cache duration

### 3. `src/Controller/LeadController.php`
API controller with explicit OPTIONS preflight handling.

**Features:**
- Explicit OPTIONS method handling for `/api/leads` endpoint
- CORS headers set on all responses
- Input validation (email or phone required)
- Error handling with appropriate HTTP status codes
- JSON responses with consistent structure

### 4. `frontend/src/services/api.js`
React API client with CORS support.

**Features:**
- CORS mode enabled (`mode: 'cors'`)
- Proper headers for preflight requests
- Error handling for network and HTTP errors
- Helper functions for testing CORS connectivity

### 5. `frontend/.env.local`
Frontend environment configuration.

**Variables:**
- `REACT_APP_API_URL`: Backend API endpoint

## How CORS Works

### Preflight Requests
For "complex" requests (POST with JSON, custom headers, etc.), browsers send an OPTIONS request first:

1. Browser → Backend: OPTIONS /api/leads
   - Headers: `Origin`, `Access-Control-Request-Method`, `Access-Control-Request-Headers`
2. Backend → Browser: 204 No Content
   - Headers: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`
3. Browser → Backend: POST /api/leads (actual request)
4. Backend → Browser: 201 Created (with CORS headers)

### Simple Requests
For "simple" requests (GET, POST with form data, no custom headers), no preflight is needed:
1. Browser → Backend: Request
2. Backend → Browser: Response (with CORS headers)

## Testing CORS

### Using the API Client
```javascript
import { testCors } from './services/api';

testCors().then(reachable => {
  console.log('Backend reachable:', reachable);
});
```

### Using curl
```bash
# Test OPTIONS preflight
curl -X OPTIONS http://ecennale-electricien-backend.ddev.site/api/leads \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -v

# Test POST request
curl -X POST http://ecennale-electricien-backend.ddev.site/api/leads \
  -H "Origin: http://localhost:3000" \
  -H "Content-Type: application/json" \
  -d '{"nom":"Test","email":"test@example.com"}' \
  -v
```

### Using browser console
```javascript
fetch('http://ecennale-electricien-backend.ddev.site/api/leads', {
  method: 'POST',
  mode: 'cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nom: 'Test', email: 'test@example.com' })
})
.then(r => r.json())
.then(console.log);
```

## Troubleshooting

### CORS Error: "No 'Access-Control-Allow-Origin' header"
**Solution:**
1. Verify `nelmio_cors.yaml` exists in `config/packages/`
2. Check that NelmioCorsBundle is in `config/bundles.php`
3. Clear cache: `ddev exec bin/console cache:clear`
4. Verify `.env` CORS variables are set

### OPTIONS Request Returns 404/405
**Solution:**
1. Ensure controller methods accept `OPTIONS` in `methods` array
2. Check route annotations: `#[Route('/leads', methods: ['POST', 'OPTIONS'])]`
3. Verify NelmioCorsBundle is properly configured

### CORS Works in Dev but Not Production
**Solution:**
1. Check `config/packages/prod/nelmio_cors.yaml` exists
2. Verify production environment variables
3. Clear production cache after deployment

### DDEV-Specific Issues
**Solution:**
1. Restart DDEV: `ddev restart`
2. Check DDEV logs: `ddev logs`
3. Verify DNS resolution: `ddev describe`
4. Ensure `.ddev/config.yaml` has correct project name

## Security Considerations

1. **Origin Validation**: Using regex pattern to validate origins
2. **Credential Handling**: `credentials: 'same-origin'` in fetch requests
3. **Header Limitation**: Only necessary headers exposed
4. **Method Restriction**: Only required HTTP methods allowed
5. **Cache Control**: Preflight responses cached for 1 hour

## Symfony 8 Best Practices

1. **Configuration over Code**: CORS rules in YAML, not PHP
2. **Environment Variables**: Sensitive config in `.env`
3. **Bundle Registration**: NelmioCorsBundle in `bundles.php`
4. **Type Safety**: PHP 8.4 with strict types
5. **Error Handling**: Try-catch with meaningful responses
6. **Validation**: Input validation before persistence
7. **Consistent Responses**: Standardized JSON response format

## API Response Format

### Success (201 Created)
```json
{
  "success": true,
  "message": "Lead créé avec succès",
  "data": {
    "id": 123,
    "nom": "Doe",
    "prenom": "John",
    "email": "john@example.com",
    "createdAt": "2026-04-28 12:00:00"
  }
}
```

### Validation Error (400 Bad Request)
```json
{
  "success": false,
  "message": "Au moins un email ou un téléphone est requis"
}
```

### Server Error (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Erreur lors de la création du lead",
  "error": "Detailed error message"
}
```

## Dependencies

- `nelmio/cors-bundle`: ^2.6
- `symfony/framework-bundle`: 8.0.*
- `doctrine/orm`: ^3.6
- `doctrine/doctrine-bundle`: ^3.2

## Maintenance

### Adding New Origins
Update `nelmio_cors.yaml`:
```yaml
allow_origin: ['^https?://(localhost|127\.0\.0\.1|newdomain\.com)(:[0-9]+)?$']
```

### Adding New Headers
Update both `nelmio_cors.yaml` and controller:
```yaml
allow_headers: ['Content-Type', 'Authorization', 'X-Custom-Header']
```

### Changing Cache Duration
Update `max_age` in `nelmio_cors.yaml` and `CORS_MAX_AGE` in `.env`

## References

- [NelmioCorsBundle Documentation](https://github.com/nelmio/NelmioCorsBundle)
- [Symfony CORS Configuration](https://symfony.com/doc/current/bundles/NelmioCorsBundle/index.html)
- [MDN CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [DDEV Documentation](https://ddev.com/documentation/)
