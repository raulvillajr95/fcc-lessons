t = linspace(0,1,100); w = 2*pi; E = 0;

for i = [0 0.25 0.5 0.75]
    e = i;
    a = 1/(1 - e);
    b = sqrt((1 + e) / (1 - e));

    E_guess = 0;

    for j = 1:100
        func = @(E) w*t(j) + e*sin(E) - E;

        E = fzero(func, E_guess);

        x(j) = a * (e - cos(E));
        y(j) = b * (sin(E));

        E_guess = E;
    end
    plot(x,y);
    hold on;
end

axis equal;
legend('e = 0', 'e = 0.25', 'e = 0.5', 'e = 0.75');