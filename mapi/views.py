from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse

from .models import Message, MessageSerializer

import json
from elastic_enterprise_search import AppSearch

f = open('private-key', 'r')
private_key = f.readline()

app_search = AppSearch(
    "https://my-deployment-c24486.ent.asia-northeast1.gcp.cloud.es.io",
    http_auth=private_key,
)


# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

# Post
def getNews(request):
    body = json.loads(request.body)
    return JsonResponse(app_search.search(
        engine_name="my-search-engine",
        body={
            "query": '+'.join(body['keywords'])
        }
    ))
    # print(app_search.search(
    #     engine_name="my-search-engine",
    #     body={"query": "rock"}
    # ))
    # return HttpResponse(request)
