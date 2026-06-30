import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from "./RegisterForm";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    vi.stubGlobal("alert", vi.fn());
});

afterEach(() => {
    vi.unstubAllGlobals();
});

it("debería enviar el formulario correctamente", async () => {
    fetch.mockResolvedValue({ ok: true });

    render(<RegisterForm />);

    fireEvent.change(screen.getByPlaceholderText(/nombre/i), { target: { value: 'user', name: 'name' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'user@test.com', name: 'email' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: '123456', name: 'password' } });
    fireEvent.change(screen.getByPlaceholderText(/confirmar contraseña/i), { target: { value: '123456', name: 'confirmPassword' } });
    
    fireEvent.click(screen.getByRole("button", { name: /continuar/i }));

await waitFor(() => {
    expect(fetch).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith("Usuario creado correctamente");
    });
});