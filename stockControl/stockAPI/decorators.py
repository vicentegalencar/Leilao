import requests as req
from django.http import JsonResponse


def verify_token():

    def wrapper(request):
        token_header = request.headers.get("x-acess-token")
        if not token_header:
            return JsonResponse({'error': 'Token não fornecido'}, status=401)
        response = req.post("localhost/4000/verifytoken", headers={"x=acess-token": token_header})
        print(response)
    return wrapper
