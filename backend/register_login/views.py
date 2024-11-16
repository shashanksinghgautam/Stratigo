from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class HelloView(APIView):
    def get(self, request):
        data = self.get_length()        
        return Response({"message": data}, status=status.HTTP_200_OK)
    
    def delete(self, request):
        return Response({"message": "TAATAT"}, status=status.HTTP_200_OK)

