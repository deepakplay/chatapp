<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\AppController;

Route::get('/{any}', AppController::class)->where('any', '.*');