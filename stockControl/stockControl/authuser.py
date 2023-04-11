
from django.http import JsonResponse
import requests as req
import json


class AuthUser:
    def __init__(self, get_response):
        self.get_response = get_response
        # Código de inicialização do Middleware

    def __call__(self, request):
        # Aqui vai o código a ser executado antes
        # da View e de outros middlewares
        # vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if request.path.startswith('/images'):
            return self.get_response(request)
        token_header = request.headers.get("X-Access-Token")
        if not token_header:
            return JsonResponse({'error': 'Token não fornecido'}, status=401)
        res = req.post("http://localhost:4000/user/info", headers={"x-access-token": token_header})
        res = json.loads(res.content)
        if res["auth"]:
            request.userInfo = res["userInfo"]
            response = self.get_response(request)
        else:
            return JsonResponse({'error': 'Nao autenticado'}, status=401)

        # ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        # Aqui vai o código a ser executado
        # para cada resposta após a View

        return response