<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tenant;

class TenantController extends Controller
{
    public function index()
    {
        $tenants = Tenant::all();
        return Inertia::render('Admin/Tenant/Index', [
            'tenants' => $tenants
        ]);
    }
}
