<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PredioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
       return [
        'nome' => 'required|max:255',
        'endereco' => 'required|max:255',
        'tipo' => 'required|max:255',
        'numero_pavimentos' => 'required|integer|min:1',
        'ano_construcao' => 'required|integer|min:1900|max:' . date('Y'),
        'area_total' => 'required|numeric|min:0',
        'numero_unidades' => 'required|integer|min:0',
        'descricao' => 'required|max:255',
        'responsavel' => 'required|max:255',
        'informacoes_adicionais' => 'required|max:255'
        ];
    }

}

/*

            'nome' => 'required|max:255',
            'endereco' => 'required|max:255',
            'tipo' => 'required|max:255',
            'numero_pavimentos' => 'required|integer|min:1',
            'ano_construcao' => 'required|integer|min:1900|max:' . date('Y'),
            'area_total' => 'required|numeric|min:0',
            'numero_unidades' => 'required|integer|min:0',
            'descricao' => 'required|max:255',
            'responsavel' => 'required|max:255',
            'informacoes_adicionais' => 'required|max:255'

*/