from rest_framework import generics, permissions
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateAPI(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Assign the logged-in retailer as the product owner
        serializer.save(retailer=self.request.user)