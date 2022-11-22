from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from django.db.models import Q
from django.db.models import Count,Sum,Avg,Min,Max
from django.core.paginator import Paginator
from django.views.generic import ListView,DetailView,CreateView,DeleteView,UpdateView

