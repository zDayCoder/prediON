<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PredioResource as PredioResource;
use App\Models\Predio;
use App\Http\Requests\PredioRequest as PredioRequest;

class PredioController extends Controller
{

    public function index()
    {
        $predios = Predio::all();
        return PredioResource::collection($predios);
    }

    public function show(Predio $predio)
    {
        return new PredioResource($predio);
    }

    public function store(PredioRequest $request)
    {
        $predio = Predio::create (  $request->all()   );
        return new PredioResource($predio);
    }

    public function update(PredioRequest $request,Predio $predio)
    {
        $predio->update (  $request->all()   );
        return new PredioResource($predio);
    }

    public function delete(Predio $predio)
    {
        $predio->delete();
        return new PredioResource($predio);
    }

    
}
