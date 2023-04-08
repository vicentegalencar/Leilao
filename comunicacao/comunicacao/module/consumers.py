from djangochannelsrestframework.decorators import action
from djangochannelsrestframework.consumers import AsyncAPIConsumer
from rest_framework import status

class MyConsumer(AsyncAPIConsumer):

    @action()
    async def an_async_action(self, some=None, **kwargs):
        # do something async
        return {'response with': 'some message'}, status.HTTP_RESPONSE_OK

    @action()
    def a_sync_action(self, pk=None, **kwargs):
        # do something sync
        return {'response with': 'some message'}, status.HTTP_RESPONSE_OK