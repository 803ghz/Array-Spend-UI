import { render, screen } from "@testing-library/react";
import ListaNotas from "./ListaNotas";

import { afterEach, beforeEach, expect, it, vi } from "vitest";

beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
})

afterEach (() => {
    vi.unstubAllGlobals();
});

it("pinta los gastos que devuelve la API"), async () => {
    fetch.mockResolvedValue({
        ok: true,
        json: async () => [
                {_id: "1", titulo: "Probando 1"},
                {_id: "2", titulo: "Probando otra vez"}
        ]
    })
    render(<ListaNotas />)

    expect(screen.getByText("Cargando gastos...")).toBeInTheDocument()

    expect(await screen.findByText("Probando 1")).toBeInTheDocument();
    expect(screen.getByText("Probando otra vez")).toBeInTheDocument();
}

it("muestra un mensaje si la API falla",
    async () => {
        fetch.mockResolvedValue({
            ok: false,
            status: 500
        });
    
    render(<ListaNotas />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument
});