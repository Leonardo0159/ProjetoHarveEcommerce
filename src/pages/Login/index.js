import './styles.css';

export const Login = () => {
    return (
        <div className='login'>
            <div className='box-login'>
                <div className='side-left'>
                    <h2>Já tem uma conta?</h2>
                    <h4>Informe seus dados para acessa-lá.</h4>
                    <div className='form-left'>
                        <input type="email" name="email" class="email" placeholder="E-mail" />
                        <input type="password" name="password" class="password" placeholder="Senha" />
                        <button type='button'>ACESSAR CONTA</button>
                    </div>
                </div>
                <div className='side-right'>
                    <h2>Novo Cliente</h2>
                    <h4>Criar uma conta é fácil! Informe seus dados e uma senha para aproveitar todos os beneficios de ter uma conta.</h4>
                    <div className='form-right'>
                        <button type='button'>CADASTRE-SE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}