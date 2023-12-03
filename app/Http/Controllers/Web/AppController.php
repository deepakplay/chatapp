<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return view('welcome');
    }
}