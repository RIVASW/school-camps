# frozen_string_literal: true

class V1::AuthenticationController < V1::ApiBase
  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render(json: { auth_token: command.result })
    else
      render(json: { error: command.errors }, status: 401)
    end
  end
end
