import requests

class MailService:
    def __init__(self, url) -> None:
        self.url = url

    def send(self, to, subject, text):
        print(to)
        requests.post(url=f'{self.url}/send', json={"to": to , "subject":subject , "text":text})