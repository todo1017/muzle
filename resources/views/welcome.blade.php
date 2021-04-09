@extends('layouts.public')

@section('content')
<div class="py-16 px-2">
    <div class="container max-w-screen-lg mx-auto">
        @auth
            <h1 class="text-2xl p-4 bg-yellow-900 text-white rounded-md">
                Welcome, {{auth()->user()->name}}
            </h1>
        @endauth
    </div>
</div>
@stop