<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function createUser(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ]);


        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()]);
        }


        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);


        return response()->json([
            'success' => true,
            "message" => "User created successfully"
        ]);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()]);
        }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                "success" => false,
                "message" => "User not found or incorrect password"
            ]);
        }

        $token = $user->createToken('MyAppToken')->accessToken;

        return response()->json([
            "success" => true,
            "user" => $user,
            "access_token" => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logout successful',
        ]);
    }
}
